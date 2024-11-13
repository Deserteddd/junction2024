using CiwSwipe.api.Dtos;
using CiwSwipe.api.Endpoints;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient();

var app = builder.Build();

await InitializeInitiatives(app.Services.GetRequiredService<IHttpClientFactory>());

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
        Comments: new List<string>()
    )).ToList();

    InitiativesEndpoints.Initiatives = initiatives;
}

