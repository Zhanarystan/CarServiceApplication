package spring.projects.CarServiceApplication.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import spring.projects.CarServiceApplication.entities.Pictures;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarsDTO implements Serializable {
    private Long id;
    private String make;
    private String model;
    private String city;
    private UserDTO postedBy;
    private String mainPictureUrl;
    private List<Pictures> pictures = new ArrayList<>();
    private Timestamp postedDate;
    private int price;
    private int manufacturedYear;
    private int imageAmount;
    private boolean isNew;
    private String country;
    private String carcaseType;
    private String engineType;
    private Double engineVolume;
    private String gearbox;
    private String color;
    private String description;
    private Integer viewAmount;
    private Integer initialFee;

}
