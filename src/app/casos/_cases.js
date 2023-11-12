import { casesImages } from "../../../public/cases"

const cases = [
  {
    id: 1,
    avatar: casesImages.joaquin,
    name: "Joaquín Sorianello",
    occupation: "Desarrollador de software",
    year: "2015",
    subtitle:"Quiso alertar sobre la facilidad de cometer un fraude informático con el sistema de votación con Boleta Única Electrónica y lo denunciaron penalmente.",
    content:{
      child1:'Días antes de las Elecciones Generales para jefe de Gobierno de 2015 en la Ciudad de Buenos Aires, ',
      chlid2:<b>Joaquín alertó fallas en el sistema de seguridad de la empresa Magic Software Argentina SA (MSA)</b>,
      child3:', elegida por el gobierno ',
      child4: <b>para implementar la Boleta Única Electrónica.</b>,
      child5: '\n\nDos días antes de las elecciones, ',
      child6: <b>la división de cibercrimen de la Policía Metropolitana allanó su casa</b>,
      child7: ' y le secuestró una computadora, cuatro discos rígidos, pendrives y memorias. ',
      child8: <b>Lo acusaron de ingresar al sistema de la empresa para “causar daño”</b>,
      child9:', es decir, ',
      child10:<b>con intenciones de generar fallas en la transparencia electoral</b>,
      child11:'. En 2016, un año después, ',
      child12: <a href="https://www.lanacion.com.ar/tecnologia/sobreseyeron-al-programador-que-revelo-fallas-en-el-sistema-de-boleta-unica-electronica-nid1924088/" target="_blank" rel="noopener noreferrer">Sorianello fue sobreseído del proceso judicial</a>,
      child13:' porque ',
      child14:<b>se determinó que había entrado al sistema, pero no de manera indebida ni causando daño alguno, sino que actuó con la (buena) intención de alertar sobre la facilidad de ejecutar un fraude informático.</b>
    },
  },
  {
    id: 2,
    avatar: casesImages.gaspar,
    name: "Gaspar Ariel Ortmann",
    occupation: "Ocupado",
    year:"2019",
    subtitle:"Logró modificar la cotización del dólar a través de su homebanking del Banco Nación y realizó varias operaciones de compraventa por un total de u$s 11.800.",
    content:{
      child1:"El 3 de septiembre de 2019, Gaspar ingresó como cualquiera de nosotros/as a su homebanking del Banco de la Nación Argentina -desarrollada y operada por la firma Red Link S.A.- pero con una pequeña gran diferencia: ",
      child2: <b>mediante técnicas específicas para detectar vulnerabilidades en sistemas informáticos, descubrió que podía modificar el valor del dólar, corriendo la coma en los valores</b>,
      child3:".\n\nUna vez modificada la cotización, ",
      child4: <b>realizó múltiples operaciones de compraventa de dólares adquiriendo los mismos a $5,695</b>,
      child5: " (cuando la cotización real era de $56,95) ",
      child6: <b>y luego vendiéndolos a $530,50</b>,
      child7: " (cuando la real era de $53,05). Todo por un monto total de U$S 11.800.\n\nEn octubre, Gaspar alertó a RedLink y Banco Nación a través de emails sobre la posibilidad de modificar el valor del dólar. El 23 de ese mes, se presentó personalmente en la entidad bancaria para mostrar las pruebas que tenía, poner a disposición de las autoridades el dinero ganado con las operaciones y así, dejar en claro su transparencia. El 1 de diciembre de ese mismo año, ",
      child8: <a href="https://www.perfil.com/noticias/amp/policia/hackeo-banco-nacion-cambio-valor-dolar-demostrar-fallas-fue-sobreseido.phtml" target="_blank" rel="noopener noreferrer">el Juzgado Criminal Nro. 11 de CABA decretó el sobreseimiento de Gaspar Ariel Ortmann</a>,
      child9: " porque ",
      child10: <b>no se causó ningún daño a los sistemas informáticos de las entidades involucradas</b>,
      child11: ". Las modificaciones se realizaron en la computadora donde se accedió a la sesión personal de homebanking, por lo que ",
      child12: <b>estrictamente se vieron afectadas las operaciones realizadas desde dicho usuario y no el sistema en general.</b>,
      child13: "\n\nAdemás, no fueron detectadas transferencias de dinero u otro tipo de operaciones que impidieran el recupero de los fondos, así como tampoco la adopción de ningún otro tipo de maniobra que tuviera por objeto encubrir, enmascarar y/o dificultar el rastreo de la procedencia y origen de dichas operaciones.",
    },
  },
  {
    id: 3,
    avatar: casesImages.javier,
    name: "Javier Smaldone",
    occupation: "Programador informático",
    year:"2019",
    subtitle:"A través de su cuenta de Twitter alertó en reiteradas oportunidades la posibilidad de vulnerar el sistema de Boleta Única Electrónica. Sin muchas pruebas ni explicaciones, lo involucraron por una investigación que hizo la Policía Federal sobre #LaGorraLeaks: el robo de 700 gigabytes de documentos internos de la Policía que se conoció en agosto último",
    content:{
      child1:"En octubre de 2019 fue demorado por una investigación por la filtración de documentos internos de la Policía de la Ciudad de Buenos Aires, la Policía Federal y la Prefectura Naval. #LaGorraLeaks2.0 fue el usuario responsable de filtrar en redes sociales dicha información: un robo de alrededor de 700 gigabytes entre documentos, audios y copias de seguridad que dejó al descubierto la vulnerabilidad de la ciberseguridad argentina.\n\n",
      child2: "En un podcast para Spotify, consideró su caso como el de un “perejil digital”. ¿A qué se refiere? Él venía advirtiendo y denunciando en sus redes distintas fallas en el sistema de la Boleta Única y cree que, luego de la filtración de datos de la PFA por parte de otro usuario, lo responsabilizaron por eso.\n\n",
      child3:"Javier cree que lo culpabilizaron, entre otros motivos, por usar lenguaje informático en sus denuncias contra la BUE. Entonces, se considera un perejil por haber culpado a un inocente.",
    },
    buttons: [
      {
        id: 1,
        icon: casesImages.podcast,
        text: 'ESCUCHÁ EL PODCAST'
      },
      {
        id: 2,
        icon: casesImages.podcast,
        text: 'BLOG DE JAVIER'
      },
      {
        id: 3,
        icon: casesImages.podcast,
        text: 'NOTA PERIODÍSTICA'
      }
    ]
  }
]

export default cases