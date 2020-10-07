import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
// @ts-ignore
import R from 'res/R';

interface LogoutProps {
    logout: () => void
}

export default class Home extends React.Component<LogoutProps> {
    render() {
        return (
            <>
                <Text style={styles.text}>{R.i18n.t('welcome')}</Text>
                <Button
                    title={R.i18n.t('logout')}
                    onPress={this.props.logout}
                />
            </>
        );
    }
}

const styles = {
    text: {
        color: R.colors.green,
        fontSize: 30
    }
};