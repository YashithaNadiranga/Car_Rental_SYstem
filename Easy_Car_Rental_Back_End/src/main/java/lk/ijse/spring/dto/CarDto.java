package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarDto {
    private String carID;
    private String brands;
    private String type;
    private int numberOfPassengers;
    private String transmissionType;
    private String fuelType;
    private double priceForExtraKM;
    private String registrationNumber;
    private String colour;
    private double dailyRate;
    private double lossDamageWaiver;
    private double monthlyRate;
    private double freeMillagePrice;
    private String freeMillageDuration;
}
