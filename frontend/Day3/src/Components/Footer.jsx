import { Grid, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import "../assets/css/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3" variant="h6">
          MomentMakers
          </Typography>
          <Typography variant="body2" gutterBottom>
            What you need, is an Event, to remember for a lifetime.
          </Typography>
          <div>
            <ul className="wrapper-footer">
              <li
                className="icon-footer facebook-footer"
                onClick={() => navigate("https://www.facebook.com/")}
              >
                <span className="tooltip-footer">Facebook</span>
                <span>
                  <FacebookOutlinedIcon />
                </span>
              </li>
              <li className="icon-footer twitter-footer">
                <span className="tooltip-footer">Twitter</span>
                <span>
                  <XIcon />
                </span>
              </li>
              <li className="icon-footer instagram-footer">
                <span className="tooltip-footer">Instagram</span>
                <span>
                  <InstagramIcon />
                </span>
              </li>
              <li className="icon-footer github-footer">
                <span className="tooltip-footer">Github</span>
                <span>
                  <GitHubIcon />
                </span>
              </li>
              <li className="icon-footer youtube-footer">
                <span className="tooltip-footer">WhatsApp</span>
                <span>
                  <WhatsAppIcon />
                </span>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={5}></Grid>
        <Grid item xs={12} sm={6} md={1}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/t&c")}
          >
            T&C
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/Policy")}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/faq")}
          >
            FAQ&lsquo;s
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Pages
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/about")}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Typography>
        </Grid>
        <Grid className="pt-15" item xs={10}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 MomentMakers. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with React JS.
          </Typography>
        </Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
