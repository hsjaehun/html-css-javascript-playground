import { useIntl } from "react-intl";

const {
   title,
   description,
   placeholder,
   keypad,
   filterFnc,
   padNumber,
   minLength,
   maxLength,
   waring,
} = setDefault({
   title: { id: "signIn.pin" },
   minLength: 4,
   maxLength: 6,
   regex: /[0-9]/g,
   placeholder: { id: "signIn.pin.placeholder" },
});

const setDefault = (text) => {
   console.log(text);
   return {
      ...text,
      title: useLang(text.title),
      placeholder: useLang(text.placeholder),
   };
};

const useLang = (props) => {
   try {
      return useIntl().formatMessage(props);
   } catch (e) {
      console.log("language:", e);
      return null;
   }
};
