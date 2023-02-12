import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      label: 'What is React?',
      content:
        'React is a front end javascript framework becuse its awesome and beautiful they said',
      id: 'dsfsdf',
    },
    {
      label: 'Why use React?',
      content:
        'React is a favorite JS library among engineers becuse its awesome and beautiful they said ',
      id: '5435rttr',
    },
    {
      label: 'How do you use React?',
      content: 'You use React by creating components becuse its awesome and beautiful they said',
      id: '534543ger23',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
