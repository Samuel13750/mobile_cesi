import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
// @ts-ignore
import R from 'res/R';

interface LoginProps {
    login: () => void
}

export default class Login extends React.Component<LoginProps> {

    render() {
        return (
            <>
                <Text style={styles.text}>{R.i18n.t('logintxt')}</Text>
                <Button
                    title={R.i18n.t('login')}
                    onPress={this.props.login}
                />
            </>
        );
    }
}

const styles = {
    text: {
        color: R.colors.white,
        fontSize: 30
    }
};