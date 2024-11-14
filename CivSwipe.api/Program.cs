using CivSwipe.api.Dtos;
using CivSwipe.api.Endpoints;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });
});

builder.Services.AddHttpClient();

var app = builder.Build();

await InitializeInitiatives(app.Services.GetRequiredService<IHttpClientFactory>());

app.UseCors(MyAllowSpecificOrigins);

app.MapInitiativesEndpoints();

app.Run();

static async Task InitializeInitiatives(IHttpClientFactory httpClientFactory)
{
    var client = httpClientFactory.CreateClient();
    var response = await client.GetStringAsync("https://www.kansalaisaloite.fi/api/v1/initiatives");
    var jsonDocument = JsonDocument.Parse(response);
    var initiatives = jsonDocument.RootElement.EnumerateArray().Select((initiative, index) => new InitiativeDto
    (
        index,
        Title: initiative.GetProperty("name").GetProperty("fi").GetString() ?? string.Empty,
        SupportCount: initiative.GetProperty("supportCount").GetInt32(),
        EndDate: DateOnly.FromDateTime(
            DateTime.Parse(initiative.GetProperty("endDate").GetString() ?? string.Empty)
        ),
        Comments: []
    )).ToList();

    InitiativesEndpoints.Initiatives = initiatives;
}

