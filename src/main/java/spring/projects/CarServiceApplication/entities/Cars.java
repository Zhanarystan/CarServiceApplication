package spring.projects.CarServiceApplication.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cars")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Cities city;

    @ManyToOne(fetch = FetchType.EAGER)
    private Makes make;

    @ManyToOne(fetch = FetchType.EAGER)
    private Models model;

    @ManyToOne(fetch = FetchType.EAGER)
    private Users postedBy;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "cp_fid", referencedColumnName = "id")
    private List<Pictures> pictures = new ArrayList<>();

    @Column(name = "main_picture_url")
    private String mainPictureUrl;

    @Column(name = "posted_date")
    private Timestamp postedDate = new Timestamp(System.currentTimeMillis());

    @Column(name = "price")
    private int price;

    @Column(name = "manufactured_year")
    private int manufacturedYear;

    @Column(name = "is_new")
    private boolean isNew;

    @Column(name = "country")
    private String country;

    @Column(name = "carcase_type")
    private String carcaseType;

    @Column(name = "engine_type")
    private String engineType;

    @Column(name = "engine_volume")
    private double engineVolume;

    @Column(name = "gearbox")
    private String gearbox;

    @Column(name = "color")
    private String color;

    @Column(name = "view_amount")
    private int viewAmount = 0;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "initial_fee")
    private Integer initialFee;

}
