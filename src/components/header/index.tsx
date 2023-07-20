export default function Header() {
    return (
        <>
            <div className=" position-fixed w-100 header bg-white d-flex justify-content-around align-items-center py-15 ">
                <div className="col-2">d</div>
                <div className="col-3 d-flex justify-content-between">
                    <a className="text-dark">dasdadasda</a>
                    <a className="text-dark">dasdadasda</a>
                    <a className="text-dark">dasdadasda</a>
                    <a className="text-dark">dasdadasda</a>
                </div>

                <div className="header-menu header-menu-mobile  header-menu-layout-default ">
                    <ul className="menu-nav">
                        <li className="menu-item  menu-item-submenu menu-item-rel menu-item-active">
                            <button type="button" className="btn btn-outline-primary">
                                Entrar
                            </button>
                        </li>
                        <li className="menu-item  menu-item-submenu menu-item-rel menu-item-active">
                            <button type="button" className="btn btn-primary">
                                Cadastre-se
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
