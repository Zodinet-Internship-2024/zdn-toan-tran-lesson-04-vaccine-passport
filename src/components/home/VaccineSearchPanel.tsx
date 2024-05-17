import VaccineSearchForm from './VaccineSearchForm';

const VaccineSearchPanel = () => {
    return (
        <section className="vaccine-search">
            <h2 className="vaccine-search__title">Tra cứu chứng nhận vắc xin!</h2>
            <p className="vaccine-search__content">
                Vui lòng điền đầy đủ các thông tin để tiến hành tìm kiếm thông tin chứng nhận vắc
                xin của bạn.
            </p>
            <VaccineSearchForm />
        </section>
    );
};
export default VaccineSearchPanel;
