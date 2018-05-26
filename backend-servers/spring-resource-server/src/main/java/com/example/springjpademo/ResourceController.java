package com.example.springjpademo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.spring.web.json.Json;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

@RestController
public class ResourceController {

    @Autowired
    ResourceRepository resourceRepository;

    @CrossOrigin
    @GetMapping(path="/resources")
    public ResponseEntity/*List<Resource>*/ getAll(@RequestParam("access_token") String token) {
        System.out.println("Token was:" + token + ".");

        URL url = null;
        HttpURLConnection con = null;
        try {
            url = new URL("http://192.168.56.1:8090/isValidToken?access_token="+token);
            con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
        } catch (ProtocolException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        StringBuffer content = null;
        try {
            int status = con.getResponseCode();

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();

            System.out.println("Response: " + content.toString());

            con.disconnect();

        } catch (IOException e) {
            e.printStackTrace();
        }

        //if()
        //return new ArrayList<>();//
        if (Boolean.parseBoolean(content.toString())) {
            return ResponseEntity.status(HttpStatus.OK).body(resourceRepository.findAll());
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }
    }

    /*
    @CrossOrigin
    @PostMapping(path="/user")
    public void create(@RequestBody User user) {
        userRepository.save(user) ;
    }
    */

    /*
    // Path
    @GetMapping(path="/api/v1/szallitmany")
    public String getAllV1() {
        return "Udv. Kolozsvarrol.";
    }

    @GetMapping(path="/api/v2/szallitmany")
    public String getAllV2() {
        return "Udv. Marosvasarhelyrol.";
    }

    // Params
    @GetMapping(path="/api/szallitmany", params = "version=1")
    public String getAllP1() {
        return "Udv. Kolozsvarrol with params.";
    }

    @GetMapping(path="/api/szallitmany", params = "version=2")
    public String getAllP2() {
        return "Udv. Marosvasarhelyrol with params.";
    }

    // Headers
    @GetMapping(path="/api/szallitmany", headers = "x-api-version=1")
    public String getAllH1() {
        return "Udv. Kolozsvarrol with params.";
    }

    @GetMapping(path="/api/szallitmany", headers = "x-api-version=2")
    public String getAllH2() {
        return "Udv. Marosvasarhelyrol with params.";
    }
    */
}
