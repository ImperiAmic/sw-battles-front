import Button from "../../../components/Button/Button";
import "./BattleForm.css";

const BattleForm: React.FC = () => {
  return (
    <form className="battle-form">
      <h2 className="battle-form__title">Add your own battle!</h2>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="battleName">
          Name
        </label>
        <input
          className="battle-form__input"
          id="battleName"
          type="text"
          required
        />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="imageUrl">
          {"Image URL (optional)"}
        </label>
        <input className="battle-form__input" id="imageUrl" type="url" />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="year">
          Year
        </label>
        <input
          className="battle-form__input"
          id="year"
          type="number"
          min="0"
          required
        />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="period">
          Period
        </label>
        <select className="battle-form__select" id="period">
          <option value="">--Select a period--</option>
          <option value="BBY">{"BBY - Before Battle of Yavin"}</option>
          <option value="ABY">{"ABY - After Battle of Yavin"}</option>
        </select>
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="conflict">
          Conflict
        </label>
        <input
          className="battle-form__input"
          id="conflict"
          type="text"
          required
        />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="lightSide">
          Light Side combatants (split by commas)
        </label>
        <input
          className="battle-form__input"
          id="lightSide"
          type="text"
          required
        />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="darkSide">
          Dark Side combatants (split by commas)
        </label>
        <input
          className="battle-form__input"
          id="darkSide"
          type="text"
          required
        />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="description">
          Explain the battle...
        </label>
        <textarea
          className="battle-form__textarea"
          id="description"
          rows={12}
          required
        />
      </div>
      <div className="battle-form__group--checkbox">
        <input
          className="battle-form__checkbox"
          type="checkbox"
          id="doesLightSideWin"
        />
        <label className="battle-form__label" htmlFor="doesLightSideWin">
          Does the Light Side win?
        </label>
      </div>
      <Button className="button" modifier="submit" type="submit">
        Create new battle
      </Button>
    </form>
  );
};

export default BattleForm;
