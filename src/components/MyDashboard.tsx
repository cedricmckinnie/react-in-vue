import {Component, Prop, Vue} from "vue-property-decorator";

import {Button, Typography} from "@material-ui/core";

import {ReactInVue} from 'vuera'
import DashboardTitleReact from '@/components/DashboardTitle.react';
import MyComponentReact from "@/components/MyComponent.react";
import ChildVueComponent from "@/components/ChildVueComponent";

import ComponentWrapperReact from '@/components/ComponentWrapper.react';

const DashboardTitle = ReactInVue(DashboardTitleReact)
const MyButton = ReactInVue(Button)
const MyTypography = ReactInVue(Typography)


const ComponentWrapper = ReactInVue(ComponentWrapperReact)

@Component({})
export default class MyDashboard extends Vue {

    buttonTitles = ['Button 1', 'Button 2']

    mounted() {
        console.log(this.$refs.buttonRef)
        console.log('ref successfully created')
    }

    handleClick(e: Event) {
        console.log(e)
        console.log('button successfully pressed!')
    }

    render(h: any) {
        return (
            <div>
                <DashboardTitle title={"My Dashboard Title"}/>

                <br/>

                <h3>
                    Feature 1 - Check Console for event
                </h3>
                <MyButton variant="contained" color="primary" passedProps={{onClick: this.handleClick}}>
                    Fire Event
                </MyButton>

                <br/>
                <br/>

                <h3>
                    Feature 2 - Check Console for event
                </h3>
                <MyButton variant="contained" color="primary" passedProps={{onClick: this.handleClick}}>
                    <ChildVueComponent/>
                </MyButton>

                <br/>
                <br/>

                <h3>
                    Feature 3 - Check Console for Ref
                </h3>
                <MyButton ref={"buttonRef"}/>

                <br/>
                <br/>

                <h3>
                    Feature 4 - Multiple buttons dynamically rendered from one array
                </h3>
                {this.buttonTitles.map(title => (
                    <MyButton variant="outlined" color="primary" passedProps={{onClick: this.handleClick}}>
                        <MyTypography color="primary" passedProps={{children: title}}/>
                    </MyButton>
                ))}

                <br/>
                <br/>

                <h3>
                    Feature 5 - React component passed into props
                </h3>
                <ComponentWrapper MyComponent={MyComponentReact}/>

                <br/>
                <br/>

            </div>
        )
    }
}
