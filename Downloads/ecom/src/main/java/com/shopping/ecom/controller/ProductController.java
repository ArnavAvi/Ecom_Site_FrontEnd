package com.shopping.ecom.controller;

import com.shopping.ecom.modal.Products;
import com.shopping.ecom.service.ProductService;
import com.shopping.ecom.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/show",method ={RequestMethod.DELETE,RequestMethod.GET,RequestMethod.POST
})
public class ProductController {
    @Autowired
    ProductService productService;
    @GetMapping("/all")
    public List<Products> shows()
    {
        return productService.show();
    }
    @GetMapping("/add")
    public Products add(@RequestBody Products p)
    {
        return productService.addProduct(p);
    }
    @GetMapping("product/{id}")
    public Products showById(@PathVariable("id") int id)
    {
       return  productService.getProductById(id);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable("id") int id)
    {
        productService.deleteById(id);
        return "Deleted Data by Id";
    }
    @GetMapping("/category/{cat}")
    public List<Products> showByCategory(@PathVariable("cat") String cat)
    {
        return productService.showByCategory(cat);
    //    List<Products> list =  productService.showByCatagory(cat);
    //    System.out.println(list);
    //    return productService.showByCatagory(cat);
    }

}
