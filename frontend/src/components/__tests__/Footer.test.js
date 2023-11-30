import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer";

test("renders NavBar", () => {
    render(
        <Router>
            <Footer />
        </Router>
    );

    // screen.debug();
    const contactForm = screen.getByRole("link", { name: "Contact us" });
    expect(contactForm).toBeInTheDocument();
});