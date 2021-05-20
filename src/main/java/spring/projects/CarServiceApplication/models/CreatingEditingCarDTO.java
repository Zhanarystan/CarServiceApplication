package spring.projects.CarServiceApplication.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatingEditingCarDTO {
    private Long id;
    private Long cityId;
    private Long makeId;
    private Long modelId;
    private Long creatorId;
    private String mainPictureUrl;
    private int price;
    private int manufacturedYear;
    private boolean isNew;
    private String country;
    private String carcaseType;
    private String engineType;
    private double engineVolume;
    private String gearbox;
    private String color;
    private String description;
    private int initialFee;
}
