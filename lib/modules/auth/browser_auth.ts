import WendigoModule from '../wendigo_module';
import { HttpAuthCredentials } from './types';
import { base64 } from '../../utils/utils';

export default class BrowserAuth extends WendigoModule {

    public async http(credentials?: HttpAuthCredentials): Promise<void> {
        await this.clear();
        if (credentials) {
            const token = base64(`${credentials.user}:${credentials.password}`);
            await this.setAuthorizationHeader(`Basic ${token}`);
        }
    }

    public async bearer(token?: string): Promise<void> {
        await this.clear();
        if (token)
            await this.setAuthorizationHeader(`Bearer ${token}`);
    }

    public clear(): Promise<void> {
        return this.setAuthorizationHeader();
    }

    private async setAuthorizationHeader(txt?: string): Promise<void> {
        if (!txt) txt = "";
        return this._page.setExtraHTTPHeaders({
            Authorization: txt
        });
    }
}
