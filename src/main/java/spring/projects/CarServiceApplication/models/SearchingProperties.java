package spring.projects.CarServiceApplication.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchingProperties implements Serializable {
    private Long cityId;
    private Long makeId;
    private Long modelId;
    private Integer yearFrom;
    private Integer yearTo;
    private Integer priceFrom;
    private Integer priceTo;
    private String country;
    private String carcaseType;
    private String engineType;
    private Double engineVolumeFrom;
    private Double engineVolumeTo;
    private String gearbox;
    private String color;
}
