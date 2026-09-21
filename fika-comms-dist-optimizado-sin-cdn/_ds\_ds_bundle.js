/* @ds-bundle: {"format":4,"namespace":"FikaCommsDesignSystem_dd39b0","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"}],"sourceHashes":{"components/core/Button.jsx":"6146e125a2e0","ui_kits/landing/App.jsx":"46cbc7211945","ui_kits/landing/ContactCTA.jsx":"36b274e6ac74","ui_kits/landing/Footer.jsx":"038c41856b0b","ui_kits/landing/Header.jsx":"66b123488c0c","ui_kits/landing/Hero.jsx":"ccf2766b3507","ui_kits/landing/Services.jsx":"c3c4afbe7127","ui_kits/landing/Statement.jsx":"df7a2e5aa4ca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FikaCommsDesignSystem_dd39b0 = window.FikaCommsDesignSystem_dd39b0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: {
    padding: '8px 16px',
    fontSize: 14
  },
  medium: {
    padding: '12px 24px',
    fontSize: 16
  },
  large: {
    padding: '16px 32px',
    fontSize: 18
  }
};
const STYLES = {
  primary: {
    background: 'var(--color-bg-accent)',
    color: 'var(--color-text-on-accent)',
    boxShadow: 'none'
  },
  secondary: {
    background: 'var(--color-bg-accent-soft)',
    color: 'var(--color-text-primary)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-primary)',
    boxShadow: 'inset 0 0 0 1.5px var(--color-border-default)'
  }
};

/** Final / Button — 3 styles x 3 sizes, exactly as defined in the Fika Comms kit. */
function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  onClick,
  style,
  children = 'Botón',
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const v = STYLES[variant] || STYLES.primary;
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : 'auto',
      padding: s.padding,
      borderRadius: 'var(--radius-md)',
      border: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: '100%',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)',
      boxSizing: 'border-box',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/App.jsx
try { (() => {
function App() {
  const [sent, setSent] = React.useState(false);
  const goContact = () => document.getElementById('contacto').scrollIntoView ? window.scrollTo({
    top: document.getElementById('contacto').offsetTop - 80,
    behavior: 'smooth'
  }) : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onContact: goContact
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      padding: '56px 72px 72px',
      display: 'flex',
      flexDirection: 'column',
      gap: 56,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    onContact: goContact
  }), /*#__PURE__*/React.createElement(Statement, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(ContactCTA, {
    sent: sent,
    onSend: () => setSent(true)
  }), /*#__PURE__*/React.createElement(Footer, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ContactCTA.jsx
try { (() => {
function ContactCTA({
  sent,
  onSend
}) {
  const {
    Button
  } = window.FikaCommsDesignSystem_dd39b0;
  const [email, setEmail] = React.useState('');
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: 'var(--color-bg-accent-soft)',
      borderRadius: 'var(--radius-md)',
      padding: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fk-eyebrow",
    style: {
      color: 'var(--color-text-primary)'
    }
  }, "CONTACTO"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: '38px',
      color: 'var(--color-text-primary)'
    }
  }, "Conversemos."), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: '28px',
      color: 'var(--color-text-primary)'
    }
  }, "Gracias. Te respondemos dentro de 24 horas.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSend();
    },
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "tu@correo.cl",
    style: {
      width: 320,
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      boxShadow: 'inset 0 0 0 1.5px var(--color-border-default)',
      background: 'var(--white-base)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--color-text-primary)',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "medium",
    as: "button",
    type: "submit"
  }, "Escr\xEDbenos")));
}
Object.assign(window, {
  ContactCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ContactCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      paddingTop: 32,
      boxShadow: 'inset 0 1px 0 var(--color-border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fika-comms-logo.png",
    alt: "Fika Comms",
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, "\xA9 2026 Fika Comms \xB7 Santiago, Chile"));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Header.jsx
try { (() => {
function Header({
  onContact
}) {
  const {
    Button
  } = window.FikaCommsDesignSystem_dd39b0;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(8px)',
      boxShadow: 'inset 0 -1px 0 var(--color-border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      padding: '20px 72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fika-comms-logo.png",
    alt: "Fika Comms",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, [['Nosotros', '#nosotros'], ['Servicios', '#servicios'], ['Contacto', '#contacto']].map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--color-text-primary)'
    }
  }, t)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small",
    onClick: onContact
  }, "Escr\xEDbenos"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
function Hero({
  onContact
}) {
  const {
    Button
  } = window.FikaCommsDesignSystem_dd39b0;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--color-bg-surface)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)',
      padding: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '100%',
      letterSpacing: '0.080em',
      color: 'var(--color-text-primary)'
    }
  }, "AGENCIA H\xCDBRIDA DE COMUNICACIONES"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 44,
      lineHeight: '52px',
      color: 'var(--color-text-primary)'
    }
  }, "Somos Fika Comms."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 760,
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 17,
      lineHeight: '28px',
      color: 'var(--color-text-secondary)',
      textWrap: 'pretty'
    }
  }, "Una agencia h\xEDbrida y poco convencional.", /*#__PURE__*/React.createElement("br", null), "Relacionamiento, PR y reputaci\xF3n, por un lado. Por el otro, estrategia digital, contenidos y redes sociales."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "medium",
    onClick: onContact
  }, "Escr\xEDbenos"));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Services.jsx
try { (() => {
const ITEMS = [{
  t: 'Relacionamiento, PR y reputación',
  d: 'Vocería, medios y gestión de reputación.'
}, {
  t: 'Estrategia digital',
  d: 'Posicionamiento y planificación de mensaje.'
}, {
  t: 'Contenidos y redes sociales',
  d: 'Producción y gestión editorial continua.'
}];
function Services() {
  const {
    Button
  } = window.FikaCommsDesignSystem_dd39b0;
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fk-eyebrow"
  }, "SERVICIOS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      alignSelf: 'stretch'
    }
  }, ITEMS.map(i => /*#__PURE__*/React.createElement("article", {
    key: i.t,
    style: {
      background: 'var(--color-bg-surface)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-bg-accent-soft)',
      boxShadow: 'inset 0 0 0 1.5px var(--color-bg-accent)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      lineHeight: '28px',
      color: 'var(--color-text-primary)'
    }
  }, i.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: '26px',
      color: 'var(--color-text-secondary)'
    }
  }, i.d), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "small"
  }, "Saber m\xE1s")))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Statement.jsx
try { (() => {
function Statement() {
  return /*#__PURE__*/React.createElement("section", {
    id: "nosotros",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fk-eyebrow"
  }, "NOSOTROS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: '38px',
      color: 'var(--color-text-primary)',
      maxWidth: 900
    }
  }, "Somos 100% agn\xF3sticos."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 760,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: '26px',
      color: 'var(--color-text-secondary)'
    }
  }, "Relacionamiento, PR y reputaci\xF3n, por un lado. Por el otro, estrategia digital, contenidos y redes sociales."));
}
Object.assign(window, {
  Statement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Statement.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

})();
