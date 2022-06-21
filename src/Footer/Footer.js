import './Footer.css'
import AT from '../Images/AT.png'
import Ber from '../Images/Ber.png'
import BL from '../Images/BL.png'
import BZOO from '../Images/BZOO.png'
import VSR from '../Images/VSR.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
            <div class="manga_container">
                <div class="manga_list">
                    <h2>Мені пощастить</h2>
                    <Link to={'/title1'} class="manga_info">
                        <img class="manga_img" src={AT} alt="Атака тинанів"/>
                        <h3>Атака тинанів</h3>
                        <p>Манга</p>
                    </Link>
                    <Link to={'/title2'} class="manga_info">
                        <img class="manga_img" src={Ber} alt="Берсерк"/>
                        <h3>Берсерк</h3>
                        <p>Манга</p>
                    </Link>
                    <Link to={'/title3'} class="manga_info">
                        <img class="manga_img" src={BL} alt="Чорна конюшина"/>
                        <h3>Чорна конюшина</h3>
                        <p>Манга</p>
                    </Link>
                    <Link to={'/title4'} class="manga_info">
                        <img class="manga_img" src={BZOO} alt="Видатні звірі"/>
                        <h3>Видатні звірі</h3>
                        <p>Манга</p>
                    </Link>
                    <Link to={'/title11'} class="manga_info">
                        <img class="manga_img" src={VSR} alt="Всевидючий читач"/>
                        <h3>Всевидючий читач</h3>
                        <p>Манхва</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Footer;