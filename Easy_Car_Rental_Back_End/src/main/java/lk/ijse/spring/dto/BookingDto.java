package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDto {
    private String bookingID;
    private String date;
    private String pickdate;
    private String status;
    private String note;
    private String  returnDate;
    private CustomerDto customerDto;
    private CarDto carDto;
    private DriverDto driverDto;
}
