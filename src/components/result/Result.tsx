import './result.scss';
import qrCode from '../../assets/qrcode.png';
import download from '../../assets/Download.svg';
import printer from '../../assets/printer.svg';
import protection from '../../assets/protection.png';

const Result = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    return (
        <main className="result-container">
            <div className="result__protection">
                <img src={protection} alt="protection icon" />
            </div>
            <article className="panel">
                <div className="panel__img">
                    <img src={qrCode} alt="qr code" />
                </div>
                <span>Mã QR sẽ hết hạn vào ngày:</span>
                <span>{`<${formattedDate}>`}</span>
                <section className="panel__infos">
                    <div className="panel__info">
                        <span>Họ tên (Name):</span>
                        <span className="panel__result">Nguyễn Văn A</span>
                    </div>
                    <div className="panel__info">
                        <span>Giới tính:</span>
                        <span className="panel__result">Nam</span>
                    </div>
                    <div className="panel__info">
                        <span>Ngày sinh:</span>
                        <span className="panel__result">10/01/1990</span>
                    </div>
                    <div className="panel__info">
                        <span>Bệnh dịch (Targeted disease):</span>
                        <span className="panel__result">85784309/Covid-19</span>
                    </div>
                    <div className="panel__info">
                        <span>Vắc xin (Vaccine):</span>
                        <span className="panel__result">SARS-Cov2 mRNA vaccine</span>
                    </div>
                    <div className="panel__info">
                        <span>Sản phẩm vắc xin (Vaccine product):</span>
                        <span className="panel__result">Cominarty/Pfrizer</span>
                    </div>
                    <div className="panel__info">
                        <span>Nhà sản xuất (Manufacture:)</span>
                        <span className="panel__result">Biontech Manufacturing GmbH</span>
                    </div>
                    <div className="panel__info">
                        <span>Số liều (Dose):</span>
                        <span className="panel__result">2</span>
                    </div>
                </section>
                <div className="panel__features">
                    <div className="panel__feature">
                        <img src={download} alt="download icon" />
                        <span>Tải hình ảnh</span>
                    </div>
                    <div className="panel__feature">
                        <img src={printer} alt="printer icon" />
                        <span>In</span>
                    </div>
                </div>
            </article>
        </main>
    );
};
export default Result;
