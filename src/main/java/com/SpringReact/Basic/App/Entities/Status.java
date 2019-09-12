package com.SpringReact.Basic.App.Entities;

public class Status {

    private int w_id;

    private int u_id;

    Status(){}

    public Status(int w_id, int u_id) {
        this.w_id = w_id;
        this.u_id = u_id;
    }

    public int getW_id() {
        return w_id;
    }

    public void setW_id(int w_id) {
        this.w_id = w_id;
    }

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }

    @Override
    public String toString() {
        return "Status{" +
                "w_id=" + w_id +
                ", u_id=" + u_id +
                '}';
    }
}
