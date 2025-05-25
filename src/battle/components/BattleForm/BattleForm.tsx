import { useNavigate } from "react-router";
import { useState } from "react";
import { mapBattleFormDataToBattleFormDataDto } from "../../dto/mappers";
import type { BattleFormData, BattleFormDataDto } from "../../../types";
import Button from "../../../ui/components/Button/Button";
import "./BattleForm.css";

interface BattleFormProps {
  action: (battleFormDataDto: BattleFormDataDto) => Promise<void>;
}

const BattleForm: React.FC<BattleFormProps> = ({ action }) => {
  const navigate = useNavigate();

  const initialFormData: BattleFormData = {
    battleName: "",
    conflict: "",
    darkSide: "",
    description: "",
    doesLightSideWin: false,
    lightSide: "",
    period: "",
    year: 0,
    imageUrl: "",
  };

  const [battleFormData, setBattleFormData] =
    useState<BattleFormData>(initialFormData);

  const handleOnChangeBattleFormData = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ): void => {
    const property = event.target.id;
    const value = event.target.value;

    setBattleFormData((previousData) => ({
      ...previousData,
      [property]: value,
    }));
  };

  const handleOnCheckBattleFormData = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const property = event.target.id;
    const checked = event.target.checked;

    setBattleFormData((previousData) => ({
      ...previousData,
      [property]: checked,
    }));
  };

  const isFormDataValid =
    battleFormData.battleName !== "" &&
    battleFormData.conflict !== "" &&
    battleFormData.darkSide.length !== 0 &&
    battleFormData.description !== "" &&
    battleFormData.lightSide.length !== 0 &&
    battleFormData.period !== "";

  const battleFormDataDto =
    mapBattleFormDataToBattleFormDataDto(battleFormData);

  const handleOnSubmitBattleForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await action(battleFormDataDto);
    navigate("/");
  };

  return (
    <form className="battle-form" onSubmit={handleOnSubmitBattleForm}>
      <h2 className="battle-form__title">Add your own battle!</h2>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="battleName">
          Name
        </label>
        <input
          className="battle-form__input"
          id="battleName"
          type="text"
          value={battleFormData.battleName}
          onChange={handleOnChangeBattleFormData}
          required
        />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="imageUrl">
          {"Image URL (optional)"}
        </label>
        <input
          className="battle-form__input"
          id="imageUrl"
          type="url"
          value={battleFormData.imageUrl}
          onChange={handleOnChangeBattleFormData}
        />
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
          value={battleFormData.year || ""}
          onChange={handleOnChangeBattleFormData}
          required
        />
      </div>
      <div className="battle-form__group">
        <label className="battle-form__label" htmlFor="period">
          Period
        </label>
        <select
          className="battle-form__select"
          id="period"
          value={battleFormData.period}
          onChange={handleOnChangeBattleFormData}
        >
          <option value="" disabled>
            --Select a period--
          </option>
          <option value="BBY">{"BBY"}</option>
          <option value="ABY">{"ABY"}</option>
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
          value={battleFormData.conflict}
          onChange={handleOnChangeBattleFormData}
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
          value={battleFormData.lightSide}
          onChange={handleOnChangeBattleFormData}
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
          value={battleFormData.darkSide}
          onChange={handleOnChangeBattleFormData}
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
          value={battleFormData.description}
          onChange={handleOnChangeBattleFormData}
          required
        />
      </div>
      <div className="battle-form__group--checkbox">
        <input
          className="battle-form__checkbox"
          type="checkbox"
          id="doesLightSideWin"
          checked={battleFormData.doesLightSideWin}
          onChange={handleOnCheckBattleFormData}
        />
        <label className="battle-form__label" htmlFor="doesLightSideWin">
          Does the Light Side win?
        </label>
      </div>
      <Button
        className="button"
        modifier="submit"
        type="submit"
        disabled={!isFormDataValid}
      >
        Create new battle
      </Button>
    </form>
  );
};

export default BattleForm;
