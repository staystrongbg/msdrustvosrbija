import { useGlobalContext } from './context';
const Overlay = () => {
  const { setShowSidebar, showSidebar, setShowSublinks } = useGlobalContext();
  const overlay = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: '33',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'none',
  };
  return (
    <div
      onClick={() => {
        setShowSublinks(false);
        setShowSidebar(false);
      }}
      style={
        showSidebar ? { ...overlay, display: 'block' } : { display: 'none' }
      }
    ></div>
  );
};

export default Overlay;
