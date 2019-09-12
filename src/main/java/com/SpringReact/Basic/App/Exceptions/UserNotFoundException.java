package com.SpringReact.Basic.App.Exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message)
    {
        super(message);
    }
}
