namespace CiwSwipe.api.Dtos;

public record class InitiativeDto(
    int Id,
    string Title,
    int SupportCount,
    DateOnly EndDate,
    List<string> Comments
);
