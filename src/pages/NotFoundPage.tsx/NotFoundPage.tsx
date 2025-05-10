import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="notfound-container">
      <span className="not-found__title">*R2-D2 noises</span>
      <div className="quote-container">
        <p className="quote__pharagraph">
          Oh dear, oh dear! It appears we've encountered a most unfortunate
          malfunction. The page you are seeking is not where it ought to be.
        </p>
        <p className="quote__pharagraph">
          I do apologize, Master — it seems this location does not exist in this
          sector of the galaxy. Perhaps it was lost in a hyperspace mishap, or
          maybe it never existed at all.
        </p>
        <p className="quote__pharagraph">
          Might I suggest returning to the main command center? I assure you,
          it's much safer there. This is all highly irregular...
        </p>
        <span className="quote__author">— C-3PO</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
