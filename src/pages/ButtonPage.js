import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';


function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click me
        </Button>
      </div>

      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Something
        </Button>
      </div>
      <div>
        <Button outline>Hide adds</Button>
      </div>


    </div>
  );
}

export default ButtonPage;
