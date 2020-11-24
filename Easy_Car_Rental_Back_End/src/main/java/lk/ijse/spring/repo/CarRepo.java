package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {

    @Query(value = "SELECT carID FROM car ORDER BY carID DESC LIMIT 1", nativeQuery = true)
    String getLastID();

    @Query(value = "SELECT * from car where type =:type", nativeQuery = true)
    List<Car> findCarsByType(@Param("type") String id);

}
