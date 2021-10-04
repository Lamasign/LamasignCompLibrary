
import { DefineComponent, Plugin } from "vue";

declare const vue3ComponentLibrary: Exclude<Plugin["install"], undefined>;

export default vue3ComponentLibrary;

export const BButton: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BBadge: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BAccordion: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BCardModal: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BCheckbox: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BDropdown: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BField: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BFileInput: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BInput: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BLink: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BMessage: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BNumberInput: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BRadio: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BSelect: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BSkeleton: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BSwitch: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BTable: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BTableColumn: Exclude<Plugin["install"], undefined> | DefineComponent;
export const Btag: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BToast: Exclude<Plugin["install"], undefined> | DefineComponent;
export const BTooltip: Exclude<Plugin["install"], undefined> | DefineComponent;