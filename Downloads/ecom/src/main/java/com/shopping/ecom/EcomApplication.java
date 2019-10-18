package com.shopping.ecom;

import com.shopping.ecom.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude= {SecurityAutoConfiguration.class})
@EnableJpaRepositories(basePackageClasses = UserRepository.class) // <-- add this

public class EcomApplication {

	public static void main(String[] args)
    {
		SpringApplication.run(EcomApplication.class, args);
	}

}
