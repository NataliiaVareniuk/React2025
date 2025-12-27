import style from "./PlaygroundPage.module.scss";
import Button from "@/ui/Button/Button.jsx";
import Link from "@/ui/Link/Link";
import ColorPalette from "../ui/ColorPicker/ColorPalette.jsx";
import playPrimary from "@/assets/images/icons/play-primary.svg";
import playSecondary from "@/assets/images/icons/play-secondary.svg";
import Input from "../ui/Input/Input.jsx";
import Checkbox from "../ui/Checkbox/Checkbox.jsx";
import Modal from "../ui/Modal/Modal.jsx";
import { useState } from "react";
import Toast from "../ui/Toast/Toast";
import Textarea from "../ui/Textarea/Textarea";
import Datepicker from "../ui/Datepicker/Datepicker";
import Dropdown from "../ui/Dropdown/Dropdown";
import TimeSelect from "../ui/TimeSelect/TimeSelect";

function PlaygroundPage() {
  const [agree, setAgree] = useState(false);
  const [agreeWithText, setAgreeWithText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [month, setMonth] = useState(new Date());
  const [selected, setSelected] = useState("Day");
  const [selectedTime, setSelectedTime] = useState("12:30 pm");
  const initialColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--picked-color01")
    .trim();

  const [text, setText] = useState(
    "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
  );

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleChangeTextArea = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.mainGroup}>
        <Button variant="primary">Button</Button>
        <Button variant="primary" disabled={true}>
          Button
        </Button>
      </div>
      <div className={style.mainGroup}>
        <Button iconSrc={playPrimary} variant="primary">
          Button
        </Button>
        <Button iconSrc={playPrimary} variant="primary" disabled={true}>
          Button
        </Button>
      </div>

      <div className={style.mainGroup}>
        <Button variant="secondary">Button</Button>
        <Button
          variant="secondary"
          disabled={true}
          onClick={() => alert("Button clicked!")}
        >
          Button
        </Button>
      </div>
      <div className={style.mainGroup}>
        <Button iconSrc={playSecondary} variant="secondary">
          Button
        </Button>
        <Button
          iconSrc={playSecondary}
          variant="secondary"
          disabled={true}
          onClick={() => alert("Button clicked!")}
        >
          Button
        </Button>
      </div>
      <div className={style.mainGroup}>
        <Link>Link</Link>
        <Link disabled>Link</Link>
      </div>
      <div className={style.mainGroup}>
        <Input
          label="Username*"
          type="text"
          error={""}
          disabled={false}
          placeholder="Enter your username"
        />
        <Input
          label="Username*"
          type="text"
          error={""}
          disabled
          placeholder="Enter your username"
        />
        <Input
          label="Username*"
          type="text"
          error={"Error message"}
          disabled={false}
          placeholder="Enter your username"
        />
      </div>
      <div className={style.mainGroup}>
        <Input
          label="Password*"
          type="password"
          error={""}
          disabled={false}
          placeholder="Enter your password"
        />
        <Input
          label="Password*"
          type="password"
          error={""}
          disabled
          placeholder="Enter your password"
        />
        <Input
          label="Password*"
          type="password"
          error={"Error message"}
          disabled={false}
          placeholder="Enter your password"
        />
      </div>
      <div className={style.mainGroup}>
        <Checkbox
          checked={agreeWithText}
          onChange={setAgreeWithText}
          children="Text"
        />
        <Checkbox checked={agree} onChange={setAgree} />
      </div>
      <div className={style.mainGroup}>
        <div className={style.modalDemo}>
          <Button onClick={() => setIsModalOpen(true)} variant="primary">
            Open Modal
          </Button>
          <Modal
            width="488"
            title="Title"
            onClose={closeModal}
            isOpen={isModalOpen}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Modal>
        </div>
        <div className={style.toastDemo}>
          <Button onClick={() => setShowToast(true)}>Show Toast</Button>
          {showToast && (
            <Toast
              message="Event deleted"
              duration={5000}
              onClose={() => setShowToast(false)}
              isOpen={true}
            />
          )}
        </div>
      </div>
      <div className={style.mainGroup}>
        <Textarea
          label="Description"
          value={text}
          onChange={handleChangeTextArea}
          disabled={false}
        />
      </div>
      <div className={style.mainGroup}>
        <Datepicker selected={month} />
      </div>
      <div className={style.mainGroup}>
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
      <div className={style.mainGroup}>
        <TimeSelect
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </div>
      <div className={style.mainGroup}>
        <div className={style.colorPickerContainer}>
          <ColorPalette />
        </div>
      </div>
    </div>
  );
}

export default PlaygroundPage;
