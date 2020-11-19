package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDto;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public interface CustomerService {
    void saveCustomer(CustomerDto dto);
    void updateCustomer(CustomerDto dto);
    CustomerDto searchCustomer(String id);
    void deleteCustomer(String id);
    List<CustomerDto> getAllCustomer();
    String getLastLoginID();
}
