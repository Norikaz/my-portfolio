package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //initalizes and arrary with quotes
    String[] quotes = {"I like anime","Dogs are the best","Lofi helps me concentrate"};
    //convert array to json
    String json = convertToJsonUsingGson(quotes);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
   private String convertToJsonUsingGson(String[] array) {
        Gson gson = new Gson();
        String json = gson.toJson(array);
        return json;
  }
}
