import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class ChildVueComponent extends Vue {

    render(h: any) {
        return (
            <div>
               My Button - Vue Component inside a React Button
            </div>
        )
    }
}
