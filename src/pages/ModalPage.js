import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button primary onClick={handleClose}>
          i accept
        </Button>
      }
    >
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {isOpen && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste,
        tempora placeat ipsa inventore suscipit dolore impedit cumque in
        perspiciatis temporibus libero debitis eaque officiis illum doloribus
        culpa explicabo eius optio veritatis qui odit eveniet, dolor sed.
        Distinctio assumenda, laborum suscipit vel ipsa incidunt facilis odit
        ab, a laboriosam voluptatibus! Sit est esse error at iure rem molestiae
        dignissimos aliquam deleniti labore illo in voluptatem, nisi incidunt
        nostrum, eaque facilis cupiditate earum voluptatibus recusandae magnam
        sequi quisquam fuga! Laboriosam dolores voluptatum quibusdam quas vero
        vel quae praesentium iusto? Alias non nisi error sed obcaecati. Magnam
        cupiditate hic, aperiam enim dolor dolores veritatis nisi quod ipsum
        fuga, eum qui ex quidem. Accusantium cum alias praesentium fugiat ea,
        consequatur ad neque quasi, delectus maiores quibusdam, obcaecati quae
        explicabo molestiae atque sequi dolore! Exercitationem qui reprehenderit
        totam perspiciatis est possimus obcaecati? Ratione doloremque modi
        mollitia, dolorem recusandae sint? Nulla ducimus repudiandae maiores
        dolorum, animi dolor quod alias necessitatibus, natus quis et aliquam
        sequi delectus a nihil fugit impedit modi consequatur? Corrupti ab velit
        architecto, itaque, optio suscipit et harum rem quasi molestiae
        asperiores unde reprehenderit cumque totam. Cumque nemo optio temporibus
        cum blanditiis odit corporis ratione accusamus eos, reiciendis excepturi
        quam? Obcaecati, laborum laudantium accusamus sapiente porro cum alias
        rem omnis voluptates vel repellat perferendis explicabo optio
        repellendus nostrum beatae illum fuga voluptatibus odit deserunt
        accusantium distinctio assumenda sint. Mollitia sint voluptatum
        recusandae dolor dignissimos voluptas voluptatem ut, excepturi placeat
        fuga corporis ratione iste, autem similique vel delectus libero.
        Repellat, a. Porro neque obcaecati odit excepturi praesentium dolorem
        perspiciatis minima quae inventore mollitia. Reprehenderit reiciendis
        cupiditate consequatur nemo, facere aliquid dolorum exercitationem
        blanditiis, eveniet nisi deleniti alias assumenda mollitia ab dolore
        odio! Recusandae eaque omnis nostrum praesentium unde nesciunt quod ut,
        blanditiis cumque, deleniti reiciendis aspernatur error, dolores a aut
        corporis. Voluptatibus nemo eligendi iusto! Amet provident illum debitis
        autem vitae eos dolor, architecto itaque delectus? Placeat deleniti quos
        sint labore, et ipsa quisquam ratione similique quibusdam maxime qui est
        error nisi tempore consectetur inventore in expedita? Ab maiores
        provident culpa. Alias atque dolorum eligendi sequi quidem tenetur
        ullam, cupiditate itaque dolores in molestias deleniti a necessitatibus
        ut sed! Recusandae laborum, eveniet debitis sit officia saepe vero nam
        nulla reiciendis. Hic exercitationem quas facilis tempora eveniet
        dolorem quod eaque quisquam earum quia, officia maiores voluptatem
        tenetur aliquam repellat iure consectetur velit pariatur vitae mollitia.
        Repudiandae, eum minus dolores dicta sit id tempora illo blanditiis
        deleniti temporibus tenetur rem sunt esse magni voluptates vitae modi
        quam repellendus error mollitia omnis. Temporibus praesentium vel maxime
        sequi facere, possimus sit? Saepe at eum, cumque eveniet magni tempora
        quis fugiat magnam dolore, veniam pariatur! Quia commodi tenetur amet
        esse nostrum error aperiam deserunt impedit perspiciatis magnam
        voluptatibus rerum minus enim obcaecati, saepe sapiente consequatur
        consectetur cum qui maiores dolore. Perferendis, eveniet quam, earum
        enim sapiente odit, eos voluptas dolor fugit id suscipit asperiores
        labore explicabo vitae alias libero quaerat. Optio sit vel cum dolore
        laudantium rerum molestias rem, ducimus libero ad non pariatur ea nisi
        quo aliquam laborum repellendus vitae error vero minus dolor?
        Dignissimos dolor recusandae quam reiciendis velit reprehenderit, rem
        ratione cupiditate, itaque quibusdam quas consectetur expedita, neque
        eaque natus ad eius animi saepe error. Id consequatur iste libero
        dolorem asperiores qui perferendis blanditiis vitae beatae, accusamus
        laboriosam minima cum officiis et quis tempora architecto rerum ipsum!
        Quod neque dolorum harum omnis laborum hic accusamus illo voluptate
        ducimus unde iusto et voluptates quae inventore praesentium sint
        blanditiis non, eveniet eligendi dolorem molestias voluptatum. Saepe vel
        quam cupiditate dolore atque labore doloribus excepturi perferendis hic
        esse, exercitationem dolor aspernatur impedit facilis fuga sint
        voluptates quia expedita.
      </p>
    </div>
  );
};

export default ModalPage;
