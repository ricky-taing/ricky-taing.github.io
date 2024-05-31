import { Injectable } from "@angular/core";
import { IIronIdentityProvider } from '../iron/i-iron-identity-provider';

@Injectable({
    providedIn: "root"
})
export class MockIdentityProviderService implements IIronIdentityProvider {
    /**
     * Request a signed JWT from the server for the current project and segment.
     */
    getJWT(userID: any): Promise<string> {
        // TODO: Catch and gracefully handle invalid JWT
        return fetch(`https://us-central1-sample-getting-started.cloudfunctions.net/getting-started-sample-1?userID=${userID}`)
            .then(response => response.text())
            .catch(e => {
                return e;
            });
    }

    getUserPasscode(): Promise<string> {
        return Promise.resolve('SAMPLE_PASSCODE');
    }
}