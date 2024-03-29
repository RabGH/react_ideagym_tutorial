import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import { Link } from "react-router-dom";
import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Consequat labore laboris id consequat mollit adipisicing adipisicing.
        Veniam exercitation duis.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <div className="plan-btn">
                  <Link to="/contact" className="btn lg">
                    Choose Plan
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
