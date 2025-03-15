import GridUiLg from "./GridUiLg";
import GridUimobile from "./GridUimobile";

function GridUi() {
  return (
    <>
      <section className="app-container mt-20 hidden grid-cols-2 gap-8 lg:grid">
        <GridUiLg />
      </section>
      <section className="app-container mt-10 flex flex-col gap-8 lg:hidden">
        <GridUimobile />
      </section>
    </>
  );
}

export default GridUi;
