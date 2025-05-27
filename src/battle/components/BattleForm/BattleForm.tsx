import { useNavigate } from "react-router";
import { useState } from "react";
import {
  mapBattleFormDataToBattleDto,
  mapBattleFormDataToBattleFormDataDto,
} from "../../dto/mappers";
import type { BattleFormData, BattleFormDataDto } from "../../../types";
import Button from "../../../ui/components/Button/Button";
import "./BattleForm.css";
import type { BattleDto } from "../../dto/types";

interface BattleFormProps {
  isNewBattleForm: boolean;
  addBattle?: (battleFormDataDto: BattleFormDataDto) => Promise<void>;
  editBattle?: (editedBattleDto: BattleDto) => Promise<void>;
  initialFormData: BattleFormData;
}

const BattleForm: React.FC<BattleFormProps> = ({
  addBattle,
  editBattle,
  initialFormData,
  isNewBattleForm,
}) => {
  const navigate = useNavigate();

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
    battleFormData.period !== "" &&
    battleFormData.darkSide !== "" &&
    battleFormData.lightSide !== "" &&
    battleFormData.description !== "";

  const battleFormDataDto =
    mapBattleFormDataToBattleFormDataDto(battleFormData);

  const handleCreateOnSubmitBattleForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await addBattle!(battleFormDataDto);
    navigate("/");
  };

  const handleEditOnSubmitBattleForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await editBattle!(mapBattleFormDataToBattleDto(battleFormData));
    navigate("/");
  };

  const onSubmitAction = isNewBattleForm
    ? handleCreateOnSubmitBattleForm
    : handleEditOnSubmitBattleForm;
  const formTitle = isNewBattleForm
    ? "Add your own battle!"
    : `Edit ${initialFormData.battleName}`;
  const buttonText = isNewBattleForm ? "Create new battle" : "Edit battle";

  return (
    <form className="battle-form" onSubmit={onSubmitAction}>
      <h2 className="battle-form__title">{formTitle}</h2>
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
          rows={15}
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
        {buttonText}
      </Button>
    </form>
  );
};

export default BattleForm;
