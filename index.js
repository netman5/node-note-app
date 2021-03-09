const express = require("express");
const morgan = require("morgan");
const { render } = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
// db connection
const db_password = process.env.db_password;
const db_connect = `mongodb+srv://noteUser:${db_password}@notescluster.f21hb.mongodb.net/notesDB?retryWrites=true&w=majority`;
// middleware
app.use(morgan("dev"));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const notes = [
        {
            title: "Breakthrough Power of Faith",
            author: "James",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, facilis nisi possimus reiciendis hic perspiciatis error labore accusamus odio. Doloremque quo id deserunt sequi labore tenetur sunt accusamus incidunt aperiam.",
        },

        {
            title: "Wisdom that works",
            author: "James",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, facilis nisi possimus reiciendis hic perspiciatis error labore accusamus odio. Doloremque quo id deserunt sequi labore tenetur sunt accusamus incidunt aperiam.",
        },

        {
            title: "Unlimited Power of Faith",
            author: "James",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, facilis nisi possimus reiciendis hic perspiciatis error labore accusamus odio. Doloremque quo id deserunt sequi labore tenetur sunt accusamus incidunt aperiam.",
        },
    ];
    res.render("index", { title: "Home", notes });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Us" });
});

// create notes
app.get("/notes/create", (req, res) => {
    res.render("create", { title: "Create New Note" });
});

// for error page
app.use((req, res) => {
    res.status(404).render("404", { title: "page not found" });
});

app.listen(PORT, () => {
    console.log("Server listening on", PORT);
});