package spring.projects.CarServiceApplication.rest;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import spring.projects.CarServiceApplication.entities.Cars;
import spring.projects.CarServiceApplication.entities.Pictures;
import spring.projects.CarServiceApplication.services.CarService;
import spring.projects.CarServiceApplication.services.PictureService;
import spring.projects.CarServiceApplication.services.UserService;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Date;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/file")
public class FileController {
    @Autowired
    private CarService carService;

    @Autowired
    private PictureService pictureService;

    @Autowired
    private UserService userService;

    @Value("${file.avatar.viewPath}")
    private String viewPath;

    @Value("${file.avatar.uploadPath}")
    private String uploadPath;

    @Value("${file.avatar.defaultPicture}")
    private String defaultPicture;

    @PostMapping(value = "/set_main_picture/{carId}")
    public ResponseEntity<?> setPicture(@PathVariable(name = "carId") Long carId,
                                        @RequestParam("file") MultipartFile file){

        if(file.getContentType().equals("image/jpeg") || file.getContentType().equals("image/png")){
            String picName = DigestUtils.sha1Hex("picture_"+file.getOriginalFilename()+"_!Picture");

            try {
                byte[] bytes = file.getBytes();
                Path path = Paths.get(uploadPath+picName+".jpg");
                Files.write(path, bytes);
                Cars car = carService.getCarById(carId);

                car.setMainPictureUrl(picName);
                carService.saveCar(car);
                return new ResponseEntity<>(car, HttpStatus.OK);
            }catch (Exception e){
                e.printStackTrace();
            }
            return new ResponseEntity<>("Unsuccess", HttpStatus.NO_CONTENT);
        }


        return new ResponseEntity<>("Unsuccess", HttpStatus.NO_CONTENT);
    }


    @GetMapping(value = "/viewphoto/{url}", produces = {MediaType.IMAGE_JPEG_VALUE})
    public @ResponseBody byte[] viewProfilePhoto(@PathVariable(name = "url") String url) throws IOException {
        String pictureURL = viewPath+defaultPicture;
        System.out.println("IIIIIIIIIIIIIIIIIIIIIAM HERE");
        if(url!=null && !url.equals("null")){
            pictureURL = viewPath+url+".jpg";
        }

        InputStream in;

        try {
            ClassPathResource resource = new ClassPathResource(pictureURL);
            in = resource.getInputStream();
        }catch (Exception e){
            ClassPathResource resource = new ClassPathResource(viewPath+defaultPicture);
            in = resource.getInputStream();
            e.printStackTrace();
        }
        return IOUtils.toByteArray(in);
    }

    @PostMapping(value = "/add_picture/{carId}")
    public ResponseEntity<?> addPicture(@PathVariable(name = "carId") Long carId,
                                        @RequestParam("file") MultipartFile file){


        if(file.getContentType().equals("image/jpeg") || file.getContentType().equals("image/png")){
            String picName = DigestUtils.sha1Hex("picture_"+file.getOriginalFilename()+"_!Picture");

            try {
                byte[] bytes = file.getBytes();
                Path path = Paths.get(uploadPath+picName+".jpg");
                Files.write(path, bytes);
                Cars car = carService.getCarById(carId);

                Pictures picture = pictureService.addPicture(new Pictures(null,picName));
                car.getPictures().add(picture);
                carService.saveCar(car);
                return new ResponseEntity<>(car, HttpStatus.OK);
            }catch (Exception e){
                e.printStackTrace();
            }
            return new ResponseEntity<>("Unsuccess", HttpStatus.NO_CONTENT);
        }


        return new ResponseEntity<>("Unsuccess", HttpStatus.NO_CONTENT);
    }
}
