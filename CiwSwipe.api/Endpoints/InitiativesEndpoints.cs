using System.Text.Json;
using CiwSwipe.api.Dtos;

namespace CiwSwipe.api.Endpoints;

public static class InitiativesEndpoints
{
    public static List<InitiativeDto> Initiatives = [];

    public static RouteGroupBuilder MapInitiativesEndpoints(this WebApplication app) {
        var group = app.MapGroup("initiatives");

        // Get initiatives
        group.MapGet("/", (HttpClient client) => Results.Ok(Initiatives));

        // Get initiative by id
        group.MapGet("/{id}", (int Id) => {
            InitiativeDto? initiative = Initiatives.Find(initiative => initiative.Id == Id);
            if (initiative == null) 
                return Results.NotFound();
            else
                return Results.Ok(initiative);
        });

        // Post a comment
        group.MapPut("/{id}", (int Id, AddCommentDto newComment) => {
            var index = Initiatives.FindIndex(initiative => initiative.Id == Id);
            if (index == -1) {
                return Results.NotFound();
            }
            Initiatives[index].Comments.Add(newComment.Comment);
            return Results.Accepted();
        });

        return group;
    }
}
