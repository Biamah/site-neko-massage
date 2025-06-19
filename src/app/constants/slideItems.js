import banner1 from "../assets/image-1.png";
import banner2 from "../assets/image-2.png";

export const slidesItems = [
  {
    id: 1,
    imageUrl: banner1.src,
    title: (
      <p>
        <span className="text-pastel-pink">
          <strong>Quick Massage</strong> para
        </span>{" "}
        <strong>Empresas e Eventos</strong>
      </p>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
  },
  {
    id: 2,
    imageUrl: banner2.src,
    title: (
      <p>
        <span className="text-pastel-pink">
          <strong>Quick Massage</strong> para
        </span>{" "}
        <strong>Casamentos</strong>
      </p>
    ),
    description:
      "Proporcione bem-estar no seu grande dia com Quick Massage para casamentos – relaxamento para noivos, padrinhos e convidados!",
  },
];
