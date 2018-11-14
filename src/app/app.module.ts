import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Tela2Page } from '../pages/tela2/tela2';
import { TelaCadastrarPage } from '../pages/tela-cadastrar/tela-cadastrar';
import { TelaCadastroPage } from '../pages/tela-cadastro/tela-cadastro';
import { TelaContaPage } from '../pages/tela-conta/tela-conta';
import { TelaEditarPage } from '../pages/tela-editar/tela-editar';
import { TelaExcluirPage } from '../pages/tela-excluir/tela-excluir';
import { TelaListarPage } from '../pages/tela-listar/tela-listar';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    Tela2Page,
    TelaCadastrarPage,
    TelaCadastroPage,
    TelaContaPage,
    TelaEditarPage,
    TelaExcluirPage,
    TelaListarPage,
    HomePage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TelaCadastroPage,
    TelaCadastrarPage,
    TelaContaPage,
    TelaEditarPage,
    TelaExcluirPage,
    TelaListarPage,
    Tela2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
