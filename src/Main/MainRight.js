import './MainRight.css';
import AT from '../Images/AT.png'
import VSR from '../Images/VSR.png'
import PRNM from '../Images/PRNM.png'
import ONEPICE from '../Images/ONEPICE.png'
import HIS from '../Images/HIS.png'
import { Link } from 'react-router-dom';

function MainRight() {
    return (
        <div className="mangatop">
            <div className="mangatop_conteiner _conteiner">
                <div className="mangatop_item">
                    <h2>Топ 5</h2>
                    <div className="mangatop_info">
                        <Link to={'/title1'} className="renewal">
                            <img className="mangatop_img" src={AT} alt=""/>
                            <div className="newmanga_n_j">
                                <p className="mangatop_nazva">Атака тинанів</p>
                                <p className="newmanga_janr">Манга</p>
                            </div>
                        </Link>
                        <Link to={'/title11'} className="renewal">
                            <img className="mangatop_img" src={VSR} alt=""/>
                            <div className="newmanga_n_j">
                                <p className="mangatop_nazva">Всевидючий читач</p>
                                <p className="newmanga_janr">Манхва</p>
                            </div>
                        </Link>
                        <Link to={'/title17'} className="renewal">
                            <img className="mangatop_img" src={PRNM} alt=""/>
                            <div className="newmanga_n_j">
                                <p className="mangatop_nazva">Природжений найманець</p>
                                <p className="newmanga_janr">Манхва</p>
                            </div>
                        </Link>
                        <Link to={'/title7'} className="renewal">
                            <img className="mangatop_img" src={ONEPICE} alt=""/>
                            <div className="newmanga_n_j">
                                <p className="mangatop_nazva">Великий куш / Ван Піс</p>
                                <p className="newmanga_janr">Манга</p>
                            </div>
                        </Link>
                        <Link to={'/title21'} className="renewal">
                            <img className="mangatop_img" src={HIS} alt=""/>
                            <div className="mangatop_n_j">
                                <p className="mangatop_nazva">Їхня історія</p>
                                <p className="mangatop_janr">Маньхуа</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
  }
  export default MainRight;