package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Booking {
    @Id
    private String bookingID;
    private String date;
    private String pickdate;
    private String returnDate;
    private String status;
    private String note;

    @ManyToOne
    @JoinColumn(name = "cusID", referencedColumnName = "customerID", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "carid", referencedColumnName = "carID", nullable = false)
    private lk.ijse.spring.entity.Car car;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "driverid", referencedColumnName = "driverID", nullable = false)
    private Driver driver;

    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
    private BookingReturn bookingReturn;

    public Booking(String id,String date, String pick, String status, String note, String returnD, Customer cus, Car c, Driver d){
        this.bookingID = id;
        this.date = date;
        this.pickdate = pick;
        this.status = status;
        this.note = note;
        this.returnDate = returnD;
        this.customer = cus;
        this.car = c;
        this.driver = d;

    }
}
