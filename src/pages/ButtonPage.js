import { AiOutlineStar, AiOutlineCloud } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { DiDatabase } from "react-icons/di";
import { BsHandbag } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import Button from "../components/Button";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button>
          <AiOutlineStar /> hello there
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoBell />
          hello there
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <BsHandbag />
          buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <AiOutlineCloud />
          something
        </Button>
      </div>
      <div>
        <Button success>
          <TbHandClick />
          click me
        </Button>
      </div>
      <div>
        <Button danger>
          <DiDatabase />
          data
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
