import ContentLoader from "react-content-loader"

const Skeleton = () => (
   <ContentLoader 
    speed={2}
    style={{background: "#181818", maxWidth: "100%", height: "100%", position: "relative"}}
    viewBox="0 0 1336 773"
    backgroundColor="#4E4E4E"
    foregroundColor="#313131"
  
  >
    {/* Лого */}
    <rect x="36" y="35" rx="0" ry="0" style={{width: "113.33px", height: "43px"}}/>
    {/* Бургер */}
    <rect x="36" y="110" rx="0" ry="0" style={{width: "20px", height: "10px", paddingTop: "13px", paddingLeft: "136px"}}/>
    {/* Поиск */}
    <rect x="218" y="35" rx="0" ry="0" style={{width: "795", height: "43px", paddingTop: "46px"}}/>
    {/* Заголовок */}
    <rect x="218" y="110" rx="0" ry="0" style={{width: "172", height: "52"}}/>
    {/* Фильтр */}
    <rect x="218" y="200" rx="0" ry="0" width="491" height="39" /> 
    {/* Треки */}
    <rect x="218" y="250" rx="0" ry="0" width="795" height="39" /> 
    <rect x="218" y="300" rx="0" ry="0" width="795" height="39"/> 
    <rect x="218" y="350" rx="0" ry="0" width="795" height="39"/> 
    <rect x="218" y="400" rx="0" ry="0" width="795" height="39"/> 
    <rect x="218" y="450" rx="0" ry="0" width="795" height="39"/> 
    <rect x="218" y="500" rx="0" ry="0" width="795" height="39"/> 
    <rect x="218" y="550" rx="0" ry="0" width="795" height="39"/> 
    <rect x="218" y="600" rx="0" ry="0" width="795" height="39"/> 
    <rect x="218" y="650" rx="0" ry="0" width="795" height="39"/> 
    {/*  Топ */}
    <rect x="1050" y="250" rx="0" ry="0" width="220" height="100" /> 
    <rect x="1050" y="380" rx="0" ry="0" width="220" height="100" />
    <rect x="1050" y="510" rx="0" ry="0" width="220" height="100" /> 
    {/* Проигрыватель */}
    <rect x="16" y="680" rx="0" ry="0" width="1923" height="50" />

  </ContentLoader>

)
export default Skeleton