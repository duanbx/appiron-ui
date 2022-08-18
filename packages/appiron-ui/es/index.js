import { ATable, ATablePopover } from 'appiron-ui/es/components';
export * from 'appiron-ui/es/components';

const components = [ATable, ATablePopover];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

export { index as default };
